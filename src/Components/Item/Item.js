import React from "react";
import "./Item.css";
export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    showSelectedHoverTitle(mode, text) {
        if (this.refs.mainWrapper.classList.contains("selected") && mode === "MouseEnter"){
            this.refs.title.innerHTML = text;
            this.refs.title.style.color = "#e62e7a";
        }

        if (mode === "MouseLeave")
        {
            this.refs.title.innerHTML = this.props.item.title;
            this.refs.title.style.color = "#666";
        }
    }

    render() {
        return (
            <div className={"Item-wrapper " + this.props.item.status} ref="mainWrapper">
                <div
                    className="Item"
                    onClick={() => this.props.toggleStatus(this.props.item.id) }
                    onMouseEnter={() => this.showSelectedHoverTitle("MouseEnter", this.props.item.titleSelectedHover)}
                    onMouseLeave={() => this.showSelectedHoverTitle("MouseLeave", this.props.item.title)}
                >
                    <div class="Item__inner-wrapper" />
                    <div className="Item__title" ref="title">
                        {this.props.item.title}
                    </div>
                    <h3 className="Item__name">{this.props.item.name}</h3>
                    <div className="Item__stuffing">{this.props.item.stuffing}</div>
                    <div className="Item__portionCount">
                        <b>{this.props.item.portionCount}</b> порций
                    </div>
                    {this.props.item.gift.map(item => <div className="Item__gift">{item}</div>)}
                    <div className="Item__nyamushka" />
                    <div className="Item__weight">
                        <div className="Item__weight-value">{this.props.item.weight}</div>
                        <div className="Item__weight-kg">кг</div>
                    </div>
                </div>
                <div className="Item__label Item__label_buy">
                    Чего сидишь? Порадуй котэ,
                    <a className="Item__label-link" href="#" onClick={() => this.props.toggleStatus(this.props.item.id)}>
                        купи
                    </a>
                </div>
                <div className="Item__label Item__label_sadness">{"Печалька, " + this.props.item.stuffing + " закончился."}</div>
                <div className="Item__label Item__label_selected">{this.props.item.selectedText}</div>
            </div>
        );
    }
}
