export const move = (array, oldIndex, newIndex) => {
    // const { user } = useSelector(state => state.auth);
    // console.log('user', user);
    if (newIndex >= array.length) {
        newIndex = array.length - 1;
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    // console.log('array', array);
    return array;
}

export const moveElement = (array, index, offset) => {
    const newIndex = index + offset;

    return move(array, index, newIndex);
}
