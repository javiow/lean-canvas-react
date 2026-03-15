import CanvasItem from './CanvasItem';

function CanvasList({ filteredData, searchText, isGridView, onDeleteItem }) {
  if (filteredData.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600">
          {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${isGridView ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} `}
    >
      {filteredData.map(item => (
        <CanvasItem
          key={item.id}
          title={item.title}
          id={item.id}
          lastModified={item.lastModified}
          category={item.category}
          onDelete={e => {
            e.preventDefault();
            onDeleteItem(item.id);
          }}
        />
      ))}
    </div>
  );
}

export default CanvasList;
