import React, { useState } from "react";

export const SettingBtn = () => {

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="font-medium">Chat Settings</h4>
        <div className="flex items-center justify-between">
          <span>Auto-scroll to bottom</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div
              className={`w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary `}
            ></div>
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
  );
};
