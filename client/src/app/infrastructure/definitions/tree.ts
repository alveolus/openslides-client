/**
 * A basic representation of a tree node. This node does not stores any data.
 */
export interface TreeIdNode {
    id: number;
    children?: TreeIdNode[];
}

/**
 * Extends the TreeIdNode with a name to display.
 */
export interface TreeNodeWithoutItem extends TreeIdNode {
    name: string;
    children?: TreeNodeWithoutItem[];
}

/**
 * A representation of nodes with the item atached.
 */
export interface OSTreeNode<T> extends TreeNodeWithoutItem {
    item: T;
    children?: OSTreeNode<T>[];
}

/**
 * Interface that describes a node for a flat tree. A flat tree has a flat hierarchy. Every node has no property like
 * `children` to make a recursive structure and describe relations between parent and child nodes. These information
 * are given by the properties `position` and `level`.
 *
 * Contains information like
 * @param item: The base item the node is created from.
 * @param level: The level of the node. The higher, the deeper the level.
 * @param position: The position in the array of the node.
 * @param isExpanded: Boolean if the node is expanded.
 * @param expandable: Boolean if the node is expandable.
 * @param id: The id of the node.
 * @param filtered: Optional boolean to check, if the node is filtered.
 */
export type FlatNode<T> = T & {
    item: T;
    level: number;
    position?: number;
    isExpanded?: boolean;
    isSeen: boolean;
    expandable: boolean;
    id: number;
    filtered?: boolean;
};
