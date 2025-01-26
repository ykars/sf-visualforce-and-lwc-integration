# Salesforce: Visualforce と LWC の統合

Visualforce と LWC を統合するサンプルアプリケーションです。

## スクラッチ組織にインストールする方法

1. 以下の環境設定を行います。

    - Traihlead Playground で Dev Hub を有効化する
    - Salesforce CLI をインストールする
    - Visual Studio Code をインストールする
    - Visual Studio Code 拡張機能「Salesforce Extension Pack」をインストールする

    設定方法は『[クイックスタート: Lightning Web コンポーネント | Salesforce Trailhead](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/)』をご参照ください。

2. Dev Hub 組織にログインし、別名を設定します。

    `--alias` の後ろの `myhuborg` が別名になります。任意の別名に変更しても問題ありません。

    ```
    sf org login web --set-default-dev-hub --alias myhuborg
    ```

3. このリポジトリをクローンします。

    ```
    git clone https://github.com/ykars/sf-visualforce-and-lwc-integration.git
    cd sf-visualforce-and-lwc-integration
    ```

4. スクラッチ組織を作成し、別名を設定します。

    `--alias` の後ろの `sf-visualforce-and-lwc-integration` が別名になります。任意の別名に変更しても問題ありません。

    ```
    sf org create scratch --set-default --definition-file config/project-scratch-def.json --alias sf-visualforce-and-lwc-integration
    ```

5. アプリをスクラッチ組織にデプロイします。

    ```
    sf project deploy start
    ```

6. 権限セットを自分に割り当てます。

    ```
    sf org assign permset --name VisualforceAndLwcIntegration
    ```

7. スクラッチ組織を開きます。

    ```
    sf org open
    ```

## Developer Edition 組織または Trailhead Playground にインストールする方法

1. このリポジトリをクローンします。

    ```
    git clone https://github.com/ykars/sf-visualforce-and-lwc-integration.git
    cd sf-visualforce-and-lwc-integration
    ```

2. Developer Edition 組織または Trailhead Playground にログインし、別名を設定します。

    `--alias` の後ろの `myhuborg` が別名になります。任意の別名に変更しても問題ありません。

    ```
    sf org login web --set-default --alias mydevorg
    ```

3. アプリをデプロイします。

    ```
    sf project deploy start --source-dir force-app
    ```

4. 権限セットを自分に割り当てます。

    ```
    sf org assign permset --name VisualforceAndLwcIntegration
    ```

5. 組織を開きます。

    ```
    sf org open
    ```
