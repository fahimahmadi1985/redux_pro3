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
      <div className="container col-6 p-5 border border-1 border-info bg-dark text-white">
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
            className="form-control mt-3"
            name="des"
          />
          Departure:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control mt-3"
            name="dep"
          />
          Date:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control mt-3"
            name="date"
          />
          <input
            type="submit"
            value="Register"
            className="btn btn-primary col-4 float-right p-3 mt-4 mb-5"
          />
        </form>

        <table className="table text-white mt-5">
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
                      <input
                        type="button"
                        className="btn btn-danger pr-3 pl-3"
                        id={f.fn}
                        onClick={e => {
                          this.props.dflight(e.target.id);
                        }}
                        value="X"
                      />
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
