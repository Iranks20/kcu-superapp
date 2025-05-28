'use client';
  // Sample user fitness data
import React from "react"

export default function FitnessTrackingScreen() {
  // Sample user fitness data
  const fitnessData = {
    dailyGoal: 10000,
    currentSteps: 7842,
    caloriesBurned: 385,
    distance: 5.2,
    activeMinutes: 48,
    weeklyProgress: [
      { day: "Mon", steps: 9500, goal: 10000 },
      { day: "Tue", steps: 8200, goal: 10000 },
      { day: "Wed", steps: 7842, goal: 10000 },
      { day: "Thu", steps: 0, goal: 10000 },
      { day: "Fri", steps: 0, goal: 10000 },
      { day: "Sat", steps: 0, goal: 10000 },
      { day: "Sun", steps: 0, goal: 10000 },
    ],
    recentWorkouts: [
      {
        id: 1,
        type: "Running",
        duration: "32 min",
        distance: "4.2 km",
        calories: 320,
        date: "Today, 8:30 AM",
        icon: "🏃‍♂️"
      },
      {
        id: 2,
        type: "Cycling",
        duration: "45 min",
        distance: "12.5 km",
        calories: 410,
        date: "Yesterday, 6:15 PM",
        icon: "🚴‍♀️"
      },
      {
        id: 3,
        type: "Swimming",
        duration: "30 min",
        distance: "1.2 km",
        calories: 280,
        date: "Nov 14, 7:00 AM",
        icon: "🏊‍♂️"
      }
    ]
  };

  // Calculate progress percentage
  const progressPercentage = Math.min(100, Math.round((fitnessData.currentSteps / fitnessData.dailyGoal) * 100));
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <a href="/index.html?screen=HealthScreen" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
            <h1 className="text-xl font-semibold">Fitness Tracking</h1>
          </div>
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4">
        <div className="flex flex-col gap-6">
          {/* Daily progress */}
          <section className="p-4 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">Today's Progress</h2>
            
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="282.7"
                    strokeDashoffset={282.7 - (282.7 * progressPercentage) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">{fitnessData.currentSteps.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">steps</span>
                </div>
              </div>
              
              <div className="w-full mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Daily Goal: {fitnessData.dailyGoal.toLocaleString()} steps</span>
                  <span className="text-sm font-medium text-blue-600">{progressPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-600">Calories</span>
                <span className="text-lg font-semibold text-gray-800">{fitnessData.caloriesBurned}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-600">Distance</span>
                <span className="text-lg font-semibold text-gray-800">{fitnessData.distance} km</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-600">Active</span>
                <span className="text-lg font-semibold text-gray-800">{fitnessData.activeMinutes} min</span>
              </div>
            </div>
          </section>

          {/* Weekly progress */}
          <section className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Weekly Progress</h2>
              <button className="text-sm font-medium text-blue-600 cursor-pointer">
                View More
              </button>
            </div>
            
            <div className="flex justify-between h-32">
              {fitnessData.weeklyProgress.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex-1 w-8 flex items-end">
                    <div
                      className={`w-full rounded-t-sm ${
                        day.steps > 0 ? "bg-blue-500" : "bg-gray-200"
                      }`}
                      style={{
                        height: `${Math.min(100, (day.steps / day.goal) * 100)}%`,
                      }}
                    ></div>
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-600">{day.day}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent workouts */}
          <section className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Recent Workouts</h2>
              <button className="text-sm font-medium text-blue-600 cursor-pointer">
                View All
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              {fitnessData.recentWorkouts.map((workout) => (
                <div key={workout.id} className="flex items-center p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl bg-blue-100 rounded-full">
                    {workout.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium text-gray-800">{workout.type}</h3>
                      <span className="text-xs text-gray-500">{workout.date}</span>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs text-gray-600">{workout.duration}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{workout.distance}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{workout.calories} cal</span>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Bottom action button */}
      <div className="sticky bottom-0 z-10 p-4 bg-white border-t border-gray-200">
        <button className="flex items-center justify-center w-full py-3 text-base font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Start New Workout
        </button>
      </div>
    </div>
  );
}