const TableData = (props) => {
  return (
    <td className="text-gray60 text-sm font-manrope border-[0.1px] border-black15 font-medium px-4 py-5 bg-page-black text-start">
      {props.content}
    </td>
  );
};

export default TableData;
