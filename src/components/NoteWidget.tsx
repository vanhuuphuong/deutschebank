import React, { useState } from "react";

const COLORS = [
  "bg-green-400",
  "bg-blue-400",
  "bg-pink-400",
  "bg-purple-400",
  "bg-orange-300 border-2 border-orange-500",
  "bg-gray-400",
];

export default function NoteWidget() {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState("");
  const [color, setColor] = useState(4); // orange default

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Floating icon */}
      <button
        className="bg-orange-400 text-white rounded-t-md px-3 py-1 shadow-lg flex flex-col items-center"
        onClick={() => setShow((s) => !s)}
        aria-label="Show note"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
      {/* Note popup */}
      {show && (
        <div className="relative bg-white rounded-lg shadow-xl p-4 min-w-[220px] mt-1 border border-gray-200">
          <textarea
            className="w-full min-h-[48px] border-none focus:ring-0 text-gray-800 bg-transparent resize-none outline-none"
            placeholder="Take a note..."
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          {/* Color picker */}
          <div className="flex items-center gap-2 mt-2 mb-1">
            {COLORS.map((cls, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full focus:outline-none ${cls} ${color === idx ? 'ring-2 ring-orange-500' : ''}`}
                onClick={() => setColor(idx)}
                aria-label={`Pick color ${idx+1}`}
              />
            ))}
          </div>
          {/* Delete button */}
          <button
            className="absolute right-2 bottom-2 text-gray-400 hover:text-red-500"
            onClick={() => { setNote(""); setShow(false); }}
            aria-label="Delete note"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}
