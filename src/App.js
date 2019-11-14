import React, { Component } from "react";

export class App extends Component {
  state = {};
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
      // eslint-disable-next-line
    });
  };
  render() {
    return (
      <div className="container m-5 p-5 border border-1 border-info bg-dark text-white">
        <form
          className="form-group"
          onSubmit={e => {
            e.preventDefault();
            this.props.dispatchRegisterFlight(this.state);
          }}
        >
          Flight Number:
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="fn"
          />
          Destination:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="des"
          />
          Departure:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="dep"
          />
          Date:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="date"
          />
          <input type="submit" value="Register" className="btn btn-primary" />
        </form>

        <table className="table text-white">
          <thead>
            <tr>
              <th>#</th>
              <th>Flight Number</th>
              <th>Destination</th>
              <th>Departure</th>
              <th colSpan="2">Flight Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.flights
              ? this.props.flights.map((f, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{f.fn}</td>
                    <td>{f.des}</td>
                    <td>{f.dep}</td>
                    <td>{f.date}</td>
                    <td>
                      <button
                        className="btn btn-danger pr-3 pl-3"
                        id={f.fn}
                        onClick={e => {
                          this.props.dflight(e.target.id);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
