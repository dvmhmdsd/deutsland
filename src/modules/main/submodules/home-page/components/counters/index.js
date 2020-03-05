import React, { Component } from "react";
import "./style.css";
import $ from 'jquery'

export default class Counters extends Component {
  counters = [
    {
      number: 100,
      name: "Awords Won"
    },
    {
      number: 100,
      name: "Awords Won"
    },
    {
      number: 100,
      name: "Awords Won"
    },
    {
      number: 100,
      name: "Awords Won"
    }
  ];

  componentDidMount() {
    var a = 0;
    $(window).scroll(function() {
      var oTop = $(".counters").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function() {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },

            {
              duration: 2000,
              easing: "swing",
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            }
          );
        });
        a = 1;
      }
    });
  }
  render() {
    return (
      <div className="counters">
        {this.counters.map(counterItem => {
          return (
            <div>
              <h2
                className="counter"
                data-count={counterItem.number}
              >50</h2>
              <p>{counterItem.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
