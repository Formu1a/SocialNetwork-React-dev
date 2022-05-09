export const updateObjectInArray = (
    items,
    itemId,
    objPropName,
    newObjProps
) => {
    return items.map((e) => {
        if (e[objPropName] === itemId) {
            return { ...e, ...newObjProps };
        }
        return e;
    });
};
