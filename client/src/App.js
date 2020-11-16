import Customer from "./Components/Customer";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { withStyles } from "@material-ui/core/styles";
import { Component } from "react";

const styles = (theme) => ({
  root: {
    width: "1700px",
    marginTop: theme.spacing.unit * 3,
    overFlowX: "auto",
  },

  table: {
    minWidth: 1080,
  },
});

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "jeewon",
    birthday: "19970102",
    school: "숭실",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "mong",
    birthday: "20141020",
    school: "none",
  },
];
class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <h1>고객정보</h1>
        <Table clsssName={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> 번호 </TableCell>
              <TableCell> 사진 </TableCell>
              <TableCell> 이름 </TableCell>
              <TableCell> 생일 </TableCell>
              <TableCell> 학교 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  school={c.school}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
