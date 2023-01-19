import React, { Component } from "react";
import "./App.css";
import { Item } from "../../Components/Item/Item";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Сказочное заморское яство",
                    titleSelectedHover: "Котэ не одобряет?",
                    name: "Нямушка",
                    stuffing: "с фуа-гра",
                    portionCount: 10,
                    gift: ["мышь в подарок"],
                    weight: "0,5",
                    status: "notSelected",
                    selectedText: "Печень утки разварная с артишоками."
                },
                {
                    id: 1,
                    title: "Сказочное заморское яство",
                    titleSelectedHover: "Котэ не одобряет?",
                    name: "Нямушка",
                    stuffing: "с рыбой",
                    portionCount: 40,
                    gift: ["2 мыши в подарок"],
                    weight: "2",
                    status: "selected",
                    selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка."
                },
                {
                    id: 2,
                    title: "Сказочное заморское яство",
                    titleSelectedHover: "Котэ не одобряет?",
                    name: "Нямушка",
                    stuffing: "с курой",
                    portionCount: 100,
                    gift: ["5 мышей в подарок", "заказчик доволен"],
                    weight: "5",
                    status: "disabled",
                    selectedText: "Филе из цыплят с трюфелями в бульоне."
                }
            ]
        };

        this.toggleStatus = this.toggleStatus.bind(this);
        this.getItemIndexById = this.getItemIndexById.bind(this);
    }

    toggleStatus(id) {
        let index = this.getItemIndexById(id);
        let newItems = this.state.items;
        if (newItems[index].status !== "disabled"){
            newItems[index].status = (newItems[index].status === "notSelected") ? "selected" : "notSelected";
            this.setState({ items: newItems });
        }

    }

    getItemIndexById(id) {
        let res = -1;
        this.state.items.forEach((item, index) => {
            if (item.id === id) res = index;
        });
        return res;
    }

    render() {
        return (
            <div className="App">
                <h1 className="App__title">Ты сегодня покормил кота?</h1>
                <div class="container px-2 px-xl-0">
                    <div class="row mx-0">
                        <div class="col-xl-4 d-flex justify-content-center mb-4 mb-xl-0">
                            <Item item={this.state.items[0]} toggleStatus={this.toggleStatus} />
                        </div>
                        <div class="col-xl-4 col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                            <Item item={this.state.items[1]} toggleStatus={this.toggleStatus} />
                        </div>
                        <div class="col-xl-4 col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                            <Item item={this.state.items[2]} toggleStatus={this.toggleStatus} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
