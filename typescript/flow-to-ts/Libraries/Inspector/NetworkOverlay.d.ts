import FlatList from '../Lists/FlatList';
import React from 'react';
import ScrollView from '../Components/ScrollView/ScrollView';
import { $ReadOnly } from "utility-types";
declare type NetworkRequestInfo = {
    id: number;
    type?: string;
    url?: string;
    method?: string;
    status?: number;
    dataSent?: any;
    responseContentType?: string;
    responseSize?: number;
    requestHeaders?: any;
    responseHeaders?: string;
    response?: any | string;
    responseURL?: string;
    responseType?: string;
    timeout?: number;
    closeReason?: string;
    messages?: string;
    serverClose?: any;
    serverError?: any;
};
declare type Props = $ReadOnly<{}>;
declare type State = {
    detailRowId: number | null | undefined;
    requests: Array<NetworkRequestInfo>;
};
/**
 * Show all the intercepted network requests over the InspectorPanel.
 */
declare class NetworkOverlay extends React.Component<Props, State> {
    _requestsListView: React.ElementRef<typeof FlatList> | null | undefined;
    _detailScrollView: React.ElementRef<typeof ScrollView> | null | undefined;
    _requestsListViewScrollMetrics: {
        offset: number;
        visibleLength: number;
        contentLength: number;
    };
    _socketIdMap: {};
    _xhrIdMap: {
        [key: number]: number;
    };
    state: State;
    _enableXHRInterception(): void;
    _enableWebSocketInterception(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _renderItem: ({ item, index }: {
        item: any;
        index: any;
    }) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    _renderItemDetail(id: any): JSX.Element;
    _indicateAdditionalRequests: () => void;
    _captureRequestsListView: (listRef: FlatList<NetworkRequestInfo> | null | undefined) => void;
    _requestsListViewOnScroll: (e: any) => void;
    /**
     * Popup a scrollView to dynamically show detailed information of
     * the request, when pressing a row in the network flow listView.
     */
    _pressRow(rowId: number): void;
    _scrollDetailToTop: () => void;
    _closeButtonClicked: () => void;
    _getRequestIndexByXHRID(index: number): number;
    render(): React.ReactNode;
}
export default NetworkOverlay;
