import { LightningElement, api } from 'lwc';

export default class LmsChild extends LightningElement {
    /**
     * メッセージチャネル
     */
    @api
    messageChannel;

    /**
     * メッセージチャネルを公開する
     * @type {(messageChannel: any, payload: any) => void}
     */
    @api
    publish;

    /**
     * メッセージチャネルを購読する
     * @type {(messageChannel: any, listener: (message: any) => void) => any}
     */
    @api
    subscribe;

    /**
     * Visualforce からのメッセージ
     * @type {{ key: number; value: string; timestamp: string; }[]}
     */
    vfMessages = [];

    /**
     * 初期処理
     */
    connectedCallback() {
        // メッセージチャネルを購読する
        if (this.messageChannel && this.subscribe) {
            this.subscribe(this.messageChannel, this.handleInboundMessage.bind(this));
        }
    }

    /**
     * 「Visualforce にメッセージを送信」ボタン押下時ハンドラ
     */
    handleSendMessageToVf() {
        // メッセージチャネルを公開する
        const payload = {
            publisher: 'LWC',
            message: 'Hello from LWC!'
        };
        this.publish(this.messageChannel, payload);
    }

    /**
     * メッセージチャネル受信時ハンドラ
     * @param {MessageChannel} message メッセージチャネルレコード
     */
    handleInboundMessage(message) {
        // 受信したメッセージを「Visualforce からのメッセージ」に表示する
        if (message.publisher === 'VF') {
            const newVfMessage = {
                key: this.vfMessages.length,
                value: message.message,
                timestamp: new Date().toLocaleTimeString()
            };
            this.vfMessages = [...this.vfMessages, newVfMessage];
        }
    }
}
