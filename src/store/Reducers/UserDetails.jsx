import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../AxiosCall/AxioCall";

const UrlparamsHandlerForBooks = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const searchquery = queryParams.get("searchquery")
    ? queryParams.get("searchquery")
    : "";
  const limitPerPage = queryParams.get("limit_per_page")
    ? queryParams.get("limit_per_page")
    : 10;
  const PageNumber = queryParams.get("pageno") ? queryParams.get("pageno") : 1;
  const ShowSearchBar = queryParams.get("show")
    ? queryParams.get("show")
    : false;
  const SearchMode = queryParams.get("mode") ? queryParams.get("mode") : "";

  return {
    SearchText: searchquery,
    PageNumber: PageNumber,
    LimitsPerPage: limitPerPage,
    ShowSearchBar: ShowSearchBar,
    SearchMode: SearchMode,
  };
};
const initailState = {
  Loading: false,
  Error: false,
  ErrorMessage: "",
  UserAccount: "",
  UserBookShelf: [],
  ...UrlparamsHandlerForBooks,
  BooksData: {},
  SearchHistory: [],
  TrendsBookData: {},
};
export const BooksApi = createAsyncThunk("Book", async (_, { getState }) => {
  let stateData = getState();
  let UserDataQruey = stateData.User;

  let params = {
    q: UserDataQruey.SearchText,
    limit: UserDataQruey.LimitsPerPage,
    page: UserDataQruey.PageNumber,
  };
  return Axios("get", "/search.json", params)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
});

export const TrendingBooksApi = createAsyncThunk(
  "TrendBook",
  async (_, { getState }) => {
    let stateData = getState();
    let UserDataQruey = stateData.User;

    let params = {
      limit: 20,
    };
    return Axios("get", "trending/now.json", params)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
);

export const UserSlice = createSlice({
  name: "userDetails",
  initialState: initailState,
  reducers: {
    ChangeUserName: (state, action) => {
      state.UserAccount = action.payload;
    },
    ToggleSearchBar: (state, action) => {
      state.ShowSearchBar = action.payload;
    },
    ChangeSearchText: (state, action) => {
      state.SearchText = action.payload;
    },
    UpdatePageNumber: (state, action) => {
      state.PageNumber = action.payload;
    },
    UpdateLimitPerPage: (state, action) => {
      state.LimitsPerPage = action.payload;
    },
    UpdateSearchHistory: (state, action) => {
      state.SearchHistory = [...state.SearchHistory, action.payload];
    },
    clearSearchHistory: (state) => {
      state.SearchHistory = [];
    },
    AddBookToShelf: (state, action) => {
      state.UserBookShelf = [...state.UserBookShelf, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BooksApi.pending, (state) => {
        state.Loading = true;
        state.Error = false;
        state.ErrorMessage = "";
      })
      .addCase(BooksApi.fulfilled, (state, action) => {
        state.BooksData = action.payload;
        state.Loading = false;
        state.Error = false;
        state.ErrorMessage = "";
      })
      .addCase(BooksApi.rejected, (state) => {
        state.Loading = false;
        state.Error = true;
        state.ErrorMessage = "Error";
      })
      .addCase(TrendingBooksApi.pending, (state) => {
        state.Loading = true;
        state.Error = false;
        state.ErrorMessage = "";
      })
      .addCase(TrendingBooksApi.fulfilled, (state, action) => {
        state.TrendsBookData = action.payload;
        state.Loading = false;
        state.Error = false;
        state.ErrorMessage = "";
      })
      .addCase(TrendingBooksApi.rejected, (state) => {
        state.Loading = false;
        state.Error = true;
        state.ErrorMessage = "Error";
      });
  },
});
export const {
  ChangeUserName,
  ToggleSearchBar,
  ChangeSearchText,
  UpdatePageNumber,
  UpdateLimitPerPage,
  UpdateSearchHistory,
  clearSearchHistory,
  AddBookToShelf,
} = UserSlice.actions;
export default UserSlice.reducer;
