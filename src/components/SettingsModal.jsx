import React from 'react';

function SettingsModal({ closeSettings }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-96 max-w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Settings</h3>
          <button onClick={closeSettings} className="hover:bg-gray-700 p-2 rounded-full">
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">Chat Settings</h4>
            <div className="flex items-center justify-between">
              <span>Auto-scroll to bottom</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span>Sound notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Display Settings</h4>
            <div className="flex items-center justify-between">
              <span>Font size</span>
              <select className="bg-gray-700 rounded px-3 py-1 outline-none focus:ring-2 focus:ring-primary">
                <option>Small</option>
                <option selected>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>Language</span>
              <select className="bg-gray-700 rounded px-3 py-1 outline-none focus:ring-2 focus:ring-primary">
                <option selected>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Privacy Settings</h4>
            <div className="flex items-center justify-between">
              <span>Save chat history</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={closeSettings} className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-button whitespace-nowrap">Cancel</button>
          <button onClick={closeSettings} className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-button whitespace-nowrap">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;