import React, { Component } from "react";
import Graph from "./Graph";
import "./Expenses.css";
import { getData } from "./../redux/action";
import { connect } from "react-redux";

class Expenses extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props.spending);
    return (
      <div className="Expenses">
        <nav>
          <div className="time">09:41</div>
          <div>
            <img src="resources/Cell.svg" alt="Cell" />
          </div>
          <div>
            <img className="wifi" src="resources/Wifi.svg" alt="Wifi" />
          </div>
          <div>
            <img src="resources/Battery.svg" alt="Battery" />
          </div>
        </nav>

        <section className="expense-view">
          <div>Expenses</div>
          <div>
            <img
              src="https://img.icons8.com/nolan/64/external-link.png"
              alt="New Window"
            />
          </div>
        </section>

        <section className="card-balance">
          <div>Card Balance</div>
          <div className="card-amt">
            {" "}
            <img
              src="https://img.icons8.com/officexs/16/000000/up.png"
              alt="Up Arrow"
            />
            <span className="card-amt">$3,214</span>
          </div>
        </section>

        <section className="balance">
          <div>${this.props.cardBalance}</div>
          <div>
            <img
              src="https://img.icons8.com/color/48/000000/long-arrow-down.png"
              alt="Down Arrow"
            />
            <span className="amt">$1,168</span>
          </div>
        </section>

        <main>
          <Graph />
        </main>

        <footer>
          <p>Spending Breakdown</p>

          <div>
            <div>
              <img
                className="expense-icon"
                src="https://img.icons8.com/cute-clipart/48/000000/shopping-cart-loaded.png"
                alt="Shopping Cart"
              />
            </div>
            <div>
              <div className="expanse-name">Shopping</div>
              <div className="expanse-date">17 Monday January</div>
            </div>
            <div className="expanse-amt">-$279,90</div>
          </div>

          <div>
            <div>
              <img
                className="expense-icon"
                src="https://img.icons8.com/flat_round/64/000000/gas-station.png"
                alt="Fuel"
              />
            </div>
            <div>
              <div className="expanse-name">Shell</div>
              <div className="expanse-date">17 Monday January</div>
            </div>
            <div className="expanse-amt">-$35,88</div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cardBalance: state.data.cardBalance,
  spending: state.data.spending,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
