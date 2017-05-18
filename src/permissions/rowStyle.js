const rowStyle = (record) => {
    console.log(record.approved_perm)
    if (record.approved_perm === true) return { backgroundColor: '#dfd' };
    if (record.approved_perm === 'undefined') return { backgroundColor: '#ffd' };
    if (record.approved_perm === false) return { backgroundColor: '#fdd' };
    return {};
};

export default rowStyle;
