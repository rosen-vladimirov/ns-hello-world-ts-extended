import observable = require("data/observable");
import * as _ from "lodash";

export class HelloWorldModel extends observable.Observable {

    private _message: string;

    get message(): string {
        return this._message;
    }
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value)
        }
    }

    constructor() {
        super();
        this.updateMessage();
    }

    private updateMessage() {
        this.message = _.random(0, 100, true).toString();
    }

    public onTap() {
        this.updateMessage();
    }
}