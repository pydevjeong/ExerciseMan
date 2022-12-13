import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

function CustomizedInputBase() {
  const [searchInput, setSearchInput] = useState("");
  const [checkInput, setCheckInput] = useState(false);
  const navigate = useNavigate()

  const searchBtnClicked = (e) => {
    e.preventDefault();
    if (checkInput) {
    } else {
      alert("적어도 2글자 이상 검색해주세요");
    }
  };
  const inputSearch = (e) => {
    if (e.target.value.length !== 0) {
      setSearchInput(e.target.value);
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  };

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      console.log('enter');
      if (checkInput) {
        navigate('/searchedFacility',{state:{
          searchInput:searchInput
        }
      })
      } else {
        alert("적어도 2글자 이상 검색해주세요");
      }
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="성남시,부천시처럼 도시를 검색해주세요"
        inputProps={{ "aria-label": "운동 시설 검색하기" }}
        onChange={inputSearch}
        onKeyPress={pressEnter}
      />


      <IconButton
        onClick={searchBtnClicked}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <Link to="/searchedFacility" state={{ searchInput }}>
          <SearchIcon />
        </Link>
      </IconButton>
    </Paper>
  );
}

export default CustomizedInputBase;
