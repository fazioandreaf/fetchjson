import { AxiosPromise, AxiosResponse } from 'axios'

interface HasId {
    id?: number;
}

interface ModelAttributes<T> {
    set(value: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface APISync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, () => void): void;
    trigger(eventName: string): void;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: APISync<T>
    ){}

    // get trigger() {
    //     return this.events.trigger;
    // }

    // get get() {
    //     return this.attributes.get;
    // }

    // get on() {
    //     return this.events.on;
    // }

    // this is equivelent of

    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;


    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw new Error('No user found')
        }

        this.sync.fetch(id).then((res: AxiosResponse) => {
            this.set(res.data)
        })
    }

    save(): void {
        this.sync
        .save(this.attributes.getAll())
        .then(
            (res: AxiosResponse): void => {this.trigger('save');}
        )
        .catch(() => {this.trigger('error')})
    }
}