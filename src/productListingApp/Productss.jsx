import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { View, Text } from "react";
import "./Product.css";

export const Productss = (item) => {
  return (
    <div>
      <section style={{ backgroundColor: "#eee", width: "80%" }}>
        <div className="container py-1">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={item.item.images[0]}
                          className="w-100"
                          alt={item.item.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{item.item.title}</h5>
                      <div className="d-flex flex-row">
                        {/* <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star">*</i>
                          <i className="fa fa-star">*</i>
                          <i className="fa fa-star">*</i>
                          <i className="fa fa-star">*</i>
                        </div> */}
                        <span className="text-primary">
                          Stock {item.item.stock}
                        </span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>{item.item.description}</span>
                      </div>
                      <div className="mb-2 text-muted small">
                        <span>Brand </span>
                        <span className="text-primary">{item.item.brand}</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">
                          $
                          {parseFloat(
                            (
                              item.item.price -
                              (item.item.price * item.item.discountPercentage) /
                                100
                            ).toFixed(2)
                          )}
                        </h4>
                        <span className="text-danger">
                          <s>${item.item.price}</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                          Details
                        </button>
                        <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
