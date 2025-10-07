

export default function Home() {
  const warnaChat = ["sky", "green", "yellow", "red"];

  return (
    <div className="min-h-screen bg-gray-200">
      
     
      <div className="bg-sky-600 text-white flex justify-between px-5 py-3">
        <h1 className="text-lg font-bold">Widgets</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm">Alexander Pierce</span>
          <img src="https://via.placeholder.com/35"
           alt="profil"
           className="rounded-full w-9 h-9" />
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        <div className="bg-sky-500 p-4 text-white rounded-lg shadow">
          <p className="text-2xl font-bold">1,410</p>
          <p>Messages</p>
          <p className="text-xs mt-2 opacity-80">More info</p>
        </div>
        <div className="bg-green-500 p-4 text-white rounded-lg shadow">
          <p className="text-2xl font-bold">410</p>
          <p>Bookmarks</p>
          <p className="text-xs mt-2 opacity-80">More info</p>
        </div>
        <div className="bg-yellow-500 p-4 text-white rounded-lg shadow">
          <p className="text-2xl font-bold">13,648</p>
          <p>Uploads</p>
          <p className="text-xs mt-2 opacity-80">More info</p>
        </div>
        <div className="bg-red-500 p-4 text-white rounded-lg shadow">
          <p className="text-2xl font-bold">93,139</p>
          <p>Likes</p>
          <p className="text-xs mt-2 opacity-80">More info</p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
        <div className="bg-sky-400 p-4 text-white rounded-lg shadow">
          <p className="text-xl font-bold">41,410</p>
          <p>Bookmarks</p>
          <div className="bg-sky-300 h-2 rounded mt-2">
            <div className="bg-white h-2 rounded w-3/4"></div>
          </div>
          <p className="text-xs mt-1">70% Increase in 30 Days</p>
        </div>
        <div className="bg-green-400 p-4 text-white rounded-lg shadow">
          <p className="text-xl font-bold">41,410</p>
          <p>Likes</p>
          <div className="bg-green-300 h-2 rounded mt-2">
            <div className="bg-white h-2 rounded w-3/4"></div>                                                                                                                                                                                                                                                                                                                                                
          </div>
          <p className="text-xs mt-1">70% Increase in 30 Days</p>
        </div>
        <div className="bg-yellow-400 p-4 text-white rounded-lg shadow">
          <p className="text-xl font-bold">41,410</p>
          <p>Events</p>
          <div className="bg-yellow-300 h-2 rounded mt-2">
            <div className="bg-white h-2 rounded w-3/4"></div>
          </div>
          <p className="text-xs mt-1">70% Increase in 30 Days</p>
        </div>
        <div className="bg-red-400 p-4 text-white rounded-lg shadow">
          <p className="text-xl font-bold">41,410</p>
          <p>Comments</p>
          <div className="bg-red-300 h-2 rounded mt-2">
            <div className="bg-white h-2 rounded w-3/4"></div>
          </div>
          <p className="text-xs mt-1">70% Increase in 30 Days</p>
        </div>
      </div>


      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-5">
        {warnaChat.map((c, i) => (
          <div key={i} className={`bg-white border-t-4 border-${c}-500 rounded-lg shadow p-4`}>
            <h3 className="font-semibold mb-3">Direct Chat</h3>

            <div className="bg-gray-100 p-2 rounded mb-2">
              <p className="text-sm"><b>Alexander:</b> Is this template free?</p>
              <span className="text-xs text-gray-500">23 Jan 2:00 pm</span>
            </div>

            <div className={`bg-${c}-500 text-white p-2 rounded text-sm`}>
              <b>Sarah:</b> You better believe it!
              <div className="text-xs mt-1">23 Jan 2:05 pm</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
