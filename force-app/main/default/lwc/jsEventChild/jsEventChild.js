import { LightningElement, api } from 'lwc';

export default class JsEventChild extends LightningElement {
    /**
     * Visualforce からのメッセージ
     * @type {{ key: number; value: string; timestamp: string; }[]}
     */
    @api
    vfMessages = [];

    /**
     * Visualforce からのメッセージを追加する
     * @param {string} message Visualforce メッセージ
     */
    @api
    addVfMessage(message) {
        const newVfMessage = {
            key: this.vfMessages.length,
            value: message,
            timestamp: new Date().toLocaleTimeString()
        };
        this.vfMessages = [...this.vfMessages, newVfMessage];
    }

    /**
     * 「Visualforce にメッセージを送信」ボタン押下時ハンドラ
     */
    handleSendMessageToVf() {
        // CustomEvent を発行
        const event = new CustomEvent("message", {
            detail: {
                message: 'Hello from LWC!'
            }
        });
        this.dispatchEvent(event);
    }
}