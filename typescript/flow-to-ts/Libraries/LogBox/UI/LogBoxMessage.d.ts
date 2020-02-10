import * as React from "react";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { Message } from "../Data/parseLogBoxLog";
declare type Props = {
    message: Message;
    style: TextStyleProp;
    plaintext?: boolean | null | undefined;
    maxLength?: number | null | undefined;
};
declare function LogBoxMessage(props: Props): React.ReactNode;
export default LogBoxMessage;
