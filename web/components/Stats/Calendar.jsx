import React, { useState } from 'react';

export default function DynamicCalendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11
  const monthLabel = currentDate.toLocaleString('uk-UA', { month: 'long' });
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const shiftIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  const emptySlots = Array(shiftIndex).fill(null);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const weekdays = ['Пн', 'Вв', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

  return (
    <div className="w-full bg-white border-gray-300 overflow-hidden border rounded-md">
      {/* Шапка календаря з навігацією */}
      <div className="flex items-center justify-between px-6 py-4 bg-white text-blue-500">
        <button 
          onClick={handlePrevMonth}
          className="p-1 rounded h-fit border border-transparent hover:border-blue-500 transition-colors font-bold text-lg cursor-pointer"
          aria-label="Попередній місяць"
        >
          &#8592;
        </button>
        <h2 className="text-xl font-semibold capitalize">
          {monthLabel} {currentYear}
        </h2>
        <button 
          onClick={handleNextMonth}
          className="p-1 rounded h-fit border border-transparent hover:border-blue-500 transition-colors font-bold text-lg cursor-pointer"
          aria-label="Наступний місяць"
        >
          &#8594;
        </button>
      </div>

      <div className="p-6">
        {/* Дні тижня */}
        <div className="grid grid-cols-7 text-center font-medium text-gray-500 mb-2">
          {weekdays.map((day) => (
            <div key={day} className="py-2 text-sm">{day}</div>
          ))}
        </div>

        {/* Сітка чисел місяця */}
        <div className="grid grid-cols-7 text-center text-gray-700">
          {/* Порожні місця для вирівнювання першого дня тижня */}
          {emptySlots.map((_, index) => (
            <div key={`empty-${index}`} className="py-3"></div>
          ))}

          {/* Дні місяця */}
          {daysArray.map((day) => (
            <div 
              key={day} 
              className={`h-fit w-full p-3 py-3 text-sm font-medium rounded cursor-pointer transition-all duration-200 border border-transparent hover:border-blue-600
                ${isToday(day) 
                  ? 'text-blue-500 font-bold' 
                  : 'text-gray-800'
                }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
