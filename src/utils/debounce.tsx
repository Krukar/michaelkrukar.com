/* eslint-disable  */

const debounce = (callback: Function, wait: number) => {
    let id: any = null;

    return (...args: any) => {
        window.clearTimeout(id);

        id = window.setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
};

export default debounce;
