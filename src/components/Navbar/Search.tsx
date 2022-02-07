import { debounce } from "lodash";
import React, { useMemo } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { changeSearchValue } from "../../store/actions/track/action";
import { Icon } from "../Icons";

const Search = (props: {
  searchValue: string;
  changeSearchValue: (value: string) => void;
}) => {
  const { searchValue, changeSearchValue } = props;

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchValue(e.target.value);
  };

  const debouncedEventHandler = useMemo(
    () =>
      debounce(
        (e: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(e),
        1000
      ),
    [searchValue]
  );

  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0"
      >
        <Icon size={24} name="search" />
      </label>
      <input
        onChange={debouncedEventHandler}
        autoFocus={true}
        type="text"
        id="search-input"
        className="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]"
        placeholder="Artist, song, or podcast"
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  searchValue: state.track.searchValue,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  changeSearchValue: (value: string) => dispatch(changeSearchValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
