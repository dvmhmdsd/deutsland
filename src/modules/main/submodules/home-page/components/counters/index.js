import React, { Component } from "react";
import "./style.css";
import $ from "jquery";
import ReactWOW from "react-wow";

export default class Counters extends Component {
  counters = [
    {
      number: 900,
      name: "Awords Won"
    },
    {
      number: 300,
      name: "Awords Won"
    },
    {
      number: 200,
      name: "Awords Won"
    },
    {
      number: 600,
      name: "Awords Won"
    }
  ];

  componentDidMount() {
    var a = 0;
    $(window).scroll(function() {
      if ($(".counters") && $(".counters").offset()) {
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
      }
    });
  }
  render() {
    return (
      <div className="counters">
        {this.counters.map(counterItem => {
          return (
            <div>
              <ReactWOW
                animation="slideInUp"
                data-wow-duration="10s"
                data-wow-delay="50s"
              >
                <h2 className="counter" data-count={counterItem.number}></h2>
                <p>{counterItem.name}</p>
              </ReactWOW>
            </div>
          );
        })}
      </div>
    );
  }
}
