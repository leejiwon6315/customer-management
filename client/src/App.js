import React, { Component } from "react";
import Customer from "./Components/Customer";
import CustomerAdd from "./Components/CustomerAdd";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "1700px",
    marginTop: theme.spacing(3),
    overFlowX: "auto",
  },

  table: {
    minWidth: 1080,
  },

  progress: {
    marginTop: theme.spacing(2),
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: "",
      completed: 0,
    };
  }

  stateRefresh = () => {
    this.setState({
      customers: "",
      completed: 0,
    });
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Paper className={classes.root}>
          <h1>고객정보</h1>
          <Table clsssName={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell> 번호 </TableCell>
                <TableCell> 사진 </TableCell>
                <TableCell> 이름 </TableCell>
                <TableCell> 생일 </TableCell>
                <TableCell> 성별 </TableCell>
                <TableCell> 직업 </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? (
                this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colspan="6" align="center">
                    <CircularProgress
                      className={classes.progress}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>

        <CustomerAdd stateRefresh={this.stateRefresh} />
      </>
    );
  }
}

export default withStyles(styles)(App);
