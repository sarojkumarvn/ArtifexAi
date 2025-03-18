import React  from 'react';
import { SettingBtn } from '../btn/SettingBtn';

function SettingsModal({ closeSettingsTab }) {
  return (
    <div className="fixed inset-0 bg-gray-500/40 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-96 max-w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Settings</h3>
          <button onClick={closeSettingsTab} className="hover:bg-gray-700 p-2 rounded-full">
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
       <SettingBtn />
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={closeSettingsTab} className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-button whitespace-nowrap">Cancel</button>
          <button onClick={closeSettingsTab} className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-button whitespace-nowrap">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;