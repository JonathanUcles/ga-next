export type OutBoundEvent = {
    event_category: string;
    event_label: string;
    event_callback?: ()=>void;
}
