import React from 'react';
import { $ReadOnly } from "utility-types";
export declare type Category = string;
export declare type Message = $ReadOnly<{
    content: string;
    substitutions: ReadonlyArray<$ReadOnly<{
        length: number;
        offset: number;
    }>>;
}>;
declare const YellowBoxCategory: {
    parse(args: readonly unknown[]): import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        category: string;
        message: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            content: any;
            substitutions: any;
        }>;
    }>;
    render({ content, substitutions }: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        content: string;
        substitutions: readonly import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            length: any;
            offset: any;
        }>[];
    }>, substitutionStyle: false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null): React.ReactNode;
};
export default YellowBoxCategory;
