

function History({pointsHistory}) {
     
  return (
    <table >
      <thead>
        <tr>
          <th>SL No.</th>
          <th>XP</th>
          <th>Title</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
     { pointsHistory?.data?.map((item,index)=>{
          return (<tr>
            <td>{index+1}</td>
            <td>{item.xp}</td>
            <td>{item.title}</td>
            <td>{item.createdAt}</td>
          </tr>)
      })
    }
      </tbody>
    </table>
  );
}

export default History;