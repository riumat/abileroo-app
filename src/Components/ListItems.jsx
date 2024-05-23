
const ListItems = ({ title, list }) => {
  return (
    <div>
      <p className="font-semibold mb-4">{title}</p>
      <div className="flex flex-col gap-3">
        {list.map((item, i) => (
          <p className="text-[14px]">{item}</p>
        ))}
      </div>
    </div>
  )
}

export default ListItems