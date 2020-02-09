import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                {/*single product*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Products</p>
                </div>
                {/*end single product*/}
                {/*single product*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Name of Product</p>
                </div>
                {/*end single product*/}
                {/*single product*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                {/*end single product*/}
                {/*single product*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                {/*end single product*/}
                {/*single product*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                {/*end single product*/}
                {/*single product*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
                {/*end single product*/}
            </div>
        </div>
    )
}
