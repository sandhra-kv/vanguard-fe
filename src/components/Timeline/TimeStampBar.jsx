import React from 'react';

const TimeStampBar = ({ timeRanges, totalDuration }) => {
    return (
        <div className="relative w-full h-3 bg-[#E9EDF7] rounded-lg overflow-hidden">
            {timeRanges.map((range, index) => {
                const { startTime, endTime } = range;
                const highlightStart = (startTime / totalDuration) * 100;
                const highlightWidth = ((endTime - startTime) / totalDuration) * 100;

                return (
                    <div
                        key={index}
                        className="absolute h-full bg-[#505BC5] opacity-50 transition-all duration-300"
                        style={{
                            left: `${highlightStart}%`,
                            width: `${highlightWidth}%`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default TimeStampBar;
