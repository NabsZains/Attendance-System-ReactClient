const rowStyle = (record) => {
    if (record.approved_perm === true) return { backgroundColor: '#dfd' };
    if (record.approved_perm === 'pending') return { backgroundColor: '#ffd' };
    if (record.approved_perm === false) return { backgroundColor: '#fdd' };
    return {};
};

export default rowStyle;
