'use client';

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import EventDialog from './EventDialog';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';

interface Event {
  id: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  description: string;
  location: string;  // Added location field
}

interface CalendarProps {
  influencerId: string;
}

export default function Calendar({ influencerId }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleDateClick = (date: Date) => {
    if (selectedDates.some(selectedDate => isSameDay(selectedDate, date))) {
      setSelectedDates(selectedDates.filter(selectedDate => !isSameDay(selectedDate, date)));
    } else {
      setSelectedDates([...selectedDates, date]);
      setIsDialogOpen(true);
      setSelectedEvent(null);
    }
  };

  const handleEventSave = (event: Event) => {
    if (selectedEvent) {
      setEvents(events.map(e => (e.id === selectedEvent.id ? event : e)));
    } else {
      setEvents([...events, { ...event, id: Math.random().toString() }]);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePreviousMonth}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold py-2">
            {day}
          </div>
        ))}
        
        {days.map(day => (
          <button
            key={day.toString()}
            onClick={() => handleDateClick(day)}
            className={`
              p-2 h-14 border rounded
              ${!isSameMonth(day, currentDate) ? 'text-gray-300' : ''}
              ${selectedDates.some(date => isSameDay(date, day)) ? 'bg-blue-100' : ''}
              ${events.some(event => isSameDay(new Date(event.date), day)) ? 'bg-blue-500 text-white' : ''}
            `}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl">
            <EventDialog
              event={selectedEvent}
              onSave={handleEventSave}
              onClose={() => setIsDialogOpen(false)}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Selected Dates:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedDates.map(date => (
            <span key={date.toString()} className="bg-blue-100 px-2 py-1 rounded">
              {format(date, 'MMM d, yyyy')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
