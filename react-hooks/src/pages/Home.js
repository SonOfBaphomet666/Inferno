import React, { Fragment } from "react";
import { Search } from "../components/Search";
import { Card } from "../components/Card";

export const Home = () => {
    const cards = new Array()
        .fill()
        .map((_, i) => i)
    return (
        <Fragment>
            <Search />
            <div className="row">
                {cards.map(card => {
                    return (
                        <div className="col-sm-4 md-4">
                            <Card />
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}