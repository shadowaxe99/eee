```javascript
import React, { useState, useEffect } from 'react';
import { getScheduleList, getScheduleDetails } from '../services/scheduleService';

const Schedule = () => {
    const [scheduleList, setScheduleList] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    useEffect(() => {
        fetchScheduleList();
    }, []);

    const fetchScheduleList = async () => {
        const schedules = await getScheduleList();
        setScheduleList(schedules);
    };

    const handleScheduleSelect = async (scheduleId) => {
        const scheduleDetails = await getScheduleDetails(scheduleId);
        setSelectedSchedule(scheduleDetails);
    };

    return (
        <div>
            <h2>Schedule</h2>
            <div>
                {scheduleList.map((schedule) => (
                    <div key={schedule.id} onClick={() => handleScheduleSelect(schedule.id)}>
                        <h3>{schedule.title}</h3>
                        <p>{schedule.date}</p>
                    </div>
                ))}
            </div>
            {selectedSchedule && (
                <div>
                    <h3>{selectedSchedule.title}</h3>
                    <p>{selectedSchedule.date}</p>
                    <p>{selectedSchedule.time}</p>
                    <p>{selectedSchedule.location}</p>
                    <p>{selectedSchedule.description}</p>
                </div>
            )}
        </div>
    );
};

export default Schedule;
```