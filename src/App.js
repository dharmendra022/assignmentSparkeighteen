import logo from './logo.svg';
import './App.css';
import Feedpage from "./Feedpage";
import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';
import { useState } from "react";


function App() {
  const [page, setPage] = useState(1);
  return (
    <div>

      <Feedpage />

      <Container className="con">


        <Pagination count={3}
          color="secondary"
          variant="outlined"
          hideNextButton={true}
          hidePrevButton={true}
          defaultPage={page}
          onChange={(event, value) => setPage(value)}
        />
      </Container>

    </div>
  )
}

export default App;
