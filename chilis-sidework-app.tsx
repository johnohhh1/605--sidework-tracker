import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Mail, Calendar, Clock, User, Globe } from 'lucide-react';

const SideworkApp = () => {
  const [language, setLanguage] = useState('en');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [teamMemberName, setTeamMemberName] = useState('');
  const [completedTasks, setCompletedTasks] = useState({});
  const [incompleteReasons, setIncompleteReasons] = useState({});

  // Translations
  const translations = {
    en: {
      title: "Chili's Sidework Tracker",
      selectRole: "Select Your Role",
      selectDay: "Select Day of Week",
      selectShift: "Select Shift",
      enterName: "Enter Your Name",
      yourName: "Your Name",
      dailySidework: "Daily Sidework",
      weeklySpark: "Weekly Sparkle",
      completed: "Completed",
      incomplete: "Incomplete",
      reason: "Reason (optional)",
      submit: "Submit Verification",
      back: "Back",
      am: "AM",
      pm: "PM",
      double: "Double",
      roles: {
        'prep-dish': 'Prep & Dish',
        'line-cook': 'Line Cook', 
        'janitorial': 'Janitorial',
        'server-bar': 'Server, Bar, To-Go, Busser',
        'runner-qa': 'Runner & QA',
        'host': 'Host'
      },
      days: {
        monday: 'Monday',
        tuesday: 'Tuesday', 
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
      }
    },
    es: {
      title: "Seguimiento de Tareas de Chili's",
      selectRole: "Selecciona tu Rol",
      selectDay: "Seleccionar Día de la Semana",
      selectShift: "Seleccionar Turno",
      enterName: "Ingresa tu Nombre", 
      yourName: "Tu Nombre",
      dailySidework: "Tareas Diarias",
      weeklySpark: "Weekly Sparkle",
      completed: "Completado",
      incomplete: "Incompleto",
      reason: "Razón (opcional)",
      submit: "Enviar Verificación",
      back: "Atrás",
      am: "AM",
      pm: "PM", 
      double: "Doble",
      roles: {
        'prep-dish': 'Prep & Dish',
        'line-cook': 'Line Cook',
        'janitorial': 'Janitorial', 
        'server-bar': 'Server, Bar, To-Go, Busser',
        'runner-qa': 'Runner & QA',
        'host': 'Host'
      },
      days: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles', 
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo'
      }
    }
  };

  const t = translations[language];

  // Task data structure
  const taskData = {
    'prep-dish': {
      daily: {
        'shift-handoff': [
          'Walk-In & Dry Storage shelving',
          'Mop/squeegee Walk-In & Dry Storage floors', 
          '3 compartment sink, hand sink & prep sink',
          'Small equipment: scales, knives, slicers & dicers',
          'Pull-thaw racks & cooling rack',
          'Perform Combi Cleaning Procedure',
          'Sanitize & charge KS iPads',
          'Prep table surfaces',
          'Change 1/2 pan silverware water (every 2 hours)'
        ],
        'end-of-night': [
          'Shelving, walls & stainless steel',
          'Dish machine: break down & clean out any leftover debris',
          'Spray handle, nozzles & remove any obstructions so machine sprays properly',
          'Clutter around dish machine',
          'Hand sinks',
          'Silverware shelf',
          'Dump sink', 
          'Clean brooms and rinse and sanitize dust pans',
          'Deck brush/squeegee dish area floors & baseboards (after all closing duties are completed)',
          'Dish & prep area floor drains',
          'Wipe down dish apron'
        ]
      },
      weekly: {
        monday: ['Walk-In shelving: all sides, casters & wheels'],
        tuesday: ['Inside HOH floor drains', 'Cook Line & stainless shelves/legs'],
        wednesday: ['Mug, chip & keg dollies: all sides & underneath', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer'],
        thursday: ['Pull thaw racks: all sides, in between shelves, wheels & casters'],
        friday: ['Deck brush/squeegee freezer floors', 'Walk-In walls & baseboards (pull all shelving)'],
        saturday: ['Change/wash/dry storage containers in Dry Storage area'],
        sunday: ['A/C vent covers', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer']
      }
    },
    'line-cook': {
      daily: {
        'pre-close': [
          'Power down bulk hold equipment (cook all items to order after rush)',
          'Begin RTZ (Return to Zone) process',
          'Re-stock To-Go supplies',
          'Pre-wipe down pans & check for expired product',
          'Top of passout',
          'Microwaves: wipe top, bottom, sides, inside & out',
          'ACT units: remove drawers & wipe top, bottom & sides',
          'Re-wrap KDS'
        ],
        'end-of-night': [
          'Hoods & vents',
          'Microwaves: top, bottom, sides, inside & out',
          'Coolers (pull all coolers out)',
          '*Turbo Chef filters: remove all filters inside & back; rinse with hot water only',
          'All cooler gaskets',
          'Food contact surfaces',
          'Complete Close to Open (wash & return zone specific utensils)',
          'Complete RTZ (Return to Zone) process',
          'Hot wells - follow proper cooling procedures',
          'Stainless passout & underneath passout shelves',
          'Deck brush/squeegee HOH floors & baseboards (after all closing duties are completed)',
          'Cook line floor drains'
        ]
      },
      weekly: {
        monday: ['ACT exterior unit', '*Turbo Chef (if applicable). NOTE: Detail Clean Turbo Chef more often if needed due to volume'],
        tuesday: ['Fryer boil out & oil replacement in all fryers (use job aid)'],
        wednesday: ['Hot wells: inside/outside, cord & grates', 'Crispy Station: all sides, grates & cord', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer'],
        thursday: ['CTX & Impinger (if applicable)', '*Turbo Chef (if applicable). NOTE: Detail Clean Turbo Chef more often if needed due to volume'],
        friday: ['Deck brush/squeegee Walk-In floors & baseboards'],
        saturday: ['Re-therm: inside/outside, wheels, casters & suitcases'],
        sunday: ['Exterior of Combi: all sides & all stainless', 'Bun toaster: all sides, grates, inside parts & cord', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer']
      }
    },
    'janitorial': {
      daily: {
        '8am-830am': [
          'Place trash in the dumpster & close dumpster lids',
          'Rinse trash cans',
          'Triple bag trash cans',
          'Setup dish machine area'
        ],
        '900am-1045am': [
          'Sweep floors',
          'Floor buff zone (indicated by designated week day)',
          'Toilets/urinals/partitions',
          'Mirrors, sinks & diaper stations',
          'Replace trash bags, toilet paper & paper towels',
          'Floors, baseboards & drains'
        ],
        '1045am-11am': [
          'Stage Dish Area: Silverware shelf, 3 - 1/2 pans filled with water, bus tub & decoy system',
          'Sweep micro trash: parking lot, perimeter of building & back dock area'
        ],
        '11am-1130am': [
          '*Trash cans: empty trash from morning prep & rebag (as needed)'
        ]
      },
      weekly: {
        monday: ['Light fixtures', 'Frames/ledges', 'Air returns', 'Windows/sills', 'Buffer/mop: Zone 3', 'Restroom'],
        tuesday: ['Bar drains', 'TVs', '*Ice machine: Outside, Bin, Shoot', 'Ice cart/buckets', 'Buffer/mop: Zone 2'],
        wednesday: ['Restrooms: Toilets/urinals, Sink/faucets, TP dispensers, Diaper stations, Partitions', 'Buffer/mop: Zone 1'],
        thursday: ['Light fixtures', 'Frames/ledges', 'Air returns', 'Windows/sills', 'Buffer/mop: Zone 7'],
        friday: ['Restrooms: Toilets/urinals, Sink/faucets, TP dispensers, Diaper stations, Partitions', 'Buffer/mop: Zone 6', 'Restroom'],
        saturday: ['Walls', 'Baseboards/tile step', 'Buffer/mop: Zone 5'],
        sunday: ['Restrooms: Toilets/urinals, Sink/faucets, TP dispensers, Diaper stations, Partitions', 'Buffer/mop: Zone 4']
      }
    },
    'server-bar': {
      daily: {
        server: [
          'Sanitize/charge headsets & iPad',
          'Tables, chairs, booths, ketchup & sweep section',
          'Remove batteries, sanitize & charge tabletop devices',
          'Bag silverware',
          'Server ledges: restock & wipe salt/pepper grinders',
          'FIFO dish',
          'Dust pan/broom'
        ],
        bartender: [
          'Sanitize/charge headsets & iPad',
          'Bar top/tables, chairs, booths, ketchup & sweep section',
          'Remove batteries, sanitize & charge tabletop devices',
          'Glassware bar mats/underneath & air dry',
          'Taps, grates, spray drains & soda gun',
          '*Taylor/marg machine: Wipe outside of machine, remove drain & clean drip tray',
          '*Coolers/chillers, gaskets, ice bin & all equipment',
          'Liquor bottles, speed rails, blenders & stainless steel',
          'Pour spouts from Store \'N Pours, cover with lid & store',
          'Discard expired product & inform Manager',
          'Take recycling bins & trash cans to HOH back door',
          'Bar/dining room floors',
          'Bar floor drains',
          'Bar windows/mirrors'
        ],
        'to-go': [
          'Sanitize/charge headsets & iPad',
          'Restock all To-Go supplies',
          'Discard expired product & inform Manager',
          'Run trays through dish, return to shelf & air dry',
          'Sanitize tip jar',
          'Remove batteries, sanitize & charge tabletop devices',
          'Empty/re-line small trash cans',
          'Counter tops, shelves, door, spot sweep & window'
        ],
        busser: [
          'Sanitize/charge headsets',
          'Spot sweep door to door',
          'Run all bus tubs through dish & return to silverware shelf in dish area',
          'Refill all disinfectant cleaner bottles & return to designated areas out of Guest view'
        ]
      },
      weekly: {
        monday: ['Clean keg cooler floors', 'Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 2'],
        tuesday: ['Stainless shelves/legs', 'Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 1'],
        wednesday: ['Bar ice bin', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer', 'Tabletop devices', 'Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 7'],
        thursday: ['Ice cream freezer', 'Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 6'],
        friday: ['Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 5'],
        saturday: ['To-Go: change storage containers', 'Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 4'],
        sunday: ['*Kegerator & Taylor machine', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer', 'Table legs/bases', 'Chair legs/bases', 'Closers pull booths/tables away from walls in Zone 3']
      }
    },
    'runner-qa': {
      daily: {
        general: [
          'Sanitize/charge headsets',
          'Equipment: tort press, induction unit(s) & microwaves',
          'QA passout line: top, middle & bottom',
          'Sweep entire line including behind equipment',
          'Small & large trays & jacks',
          'Fill ice bins',
          'Small & large trivets',
          'Restock bev naps, wet naps, spoons & forks',
          'Clean/breakdown all stations',
          'FIFO dish'
        ]
      },
      weekly: {
        monday: ['Coolers & gaskets', 'White walls & baseboards'],
        tuesday: ['Stainless shelves/legs'],
        wednesday: ['Bev station ice bin', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer'],
        thursday: ['Hot wells'],
        friday: ['Coolers & gaskets', 'White walls & baseboards'],
        saturday: ['Change storage containers on line'],
        sunday: ['Chip machine', '*KS printers: remove paper, clear spool of buildup & wipe sides of printer']
      }
    },
    'host': {
      daily: {
        general: [
          'Clean front doors & windows',
          'Restock supplies: kid\'s menus, kid\'s silverware & crayons',
          'Bag kid\'s silverware based on needs',
          'Restroom check/restock',
          'Collect/organize all menus & feature cards',
          'Wipe down all menus/feature cards',
          'De-clutter Host area & spot sweep lobby/foyer',
          'Clear floor plan & ensure iPad is left in office to charge overnight',
          'Clean highchairs, booster seats & slings',
          'Sanitize/charge headsets'
        ]
      },
      weekly: {
        monday: ['Detail inside & outside of both front door frames'],
        tuesday: ['Sweep foyer and behind booths (where applicable)'],
        wednesday: ['Detail windows in foyer area'],
        thursday: ['Foyer ledges', 'Sweep foyer and behind booths (where applicable)'],
        friday: ['Declutter inside of host stand'],
        saturday: ['Detail highchairs'],
        sunday: ['Detail booster seats']
      }
    }
  };

  const getCurrentTasks = () => {
    if (!selectedRole || !selectedDay) return { daily: [], weekly: [] };
    
    const roleData = taskData[selectedRole];
    const dailyTasks = [];
    const weeklyTasks = roleData.weekly[selectedDay] || [];

    // Get daily tasks based on role and shift
    if (selectedRole === 'prep-dish') {
      if (selectedShift === 'am' || selectedShift === 'double') {
        dailyTasks.push(...roleData.daily['shift-handoff']);
      }
      if (selectedShift === 'pm' || selectedShift === 'double') {
        dailyTasks.push(...roleData.daily['end-of-night']);
      }
    } else if (selectedRole === 'line-cook') {
      if (selectedShift === 'am' || selectedShift === 'double') {
        dailyTasks.push(...roleData.daily['pre-close']);
      }
      if (selectedShift === 'pm' || selectedShift === 'double') {
        dailyTasks.push(...roleData.daily['end-of-night']);
      }
    } else if (selectedRole === 'janitorial') {
      // Janitorial has time-based tasks, show all for now
      Object.values(roleData.daily).forEach(tasks => {
        dailyTasks.push(...tasks);
      });
    } else if (selectedRole === 'server-bar') {
      // Show all server-bar tasks
      Object.values(roleData.daily).forEach(tasks => {
        dailyTasks.push(...tasks);
      });
    } else {
      // For other roles, show general daily tasks
      if (roleData.daily.general) {
        dailyTasks.push(...roleData.daily.general);
      }
    }

    return { daily: dailyTasks, weekly: weeklyTasks };
  };

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const updateReason = (taskId, reason) => {
    setIncompleteReasons(prev => ({
      ...prev,
      [taskId]: reason
    }));
  };

  const generateEmail = () => {
    const { daily, weekly } = getCurrentTasks();
    const allTasks = [...daily, ...weekly];
    const completedList = [];
    const incompleteList = [];

    allTasks.forEach((task, index) => {
      const taskId = `task-${index}`;
      if (completedTasks[taskId]) {
        completedList.push(task);
      } else {
        const reason = incompleteReasons[taskId] || 'No reason provided';
        incompleteList.push(`${task} - Reason: ${reason}`);
      }
    });

    const timestamp = new Date().toLocaleString();
    const subject = `Sidework Verification - ${teamMemberName} - ${t.roles[selectedRole]} - ${timestamp}`;
    
    const body = `
Sidework Verification Report

Team Member: ${teamMemberName}
Role: ${t.roles[selectedRole]}
Day: ${t.days[selectedDay]}
Shift: ${selectedShift.toUpperCase()}
Timestamp: ${timestamp}

COMPLETED TASKS (${completedList.length}):
${completedList.map(task => `✅ ${task}`).join('\n')}

INCOMPLETE TASKS (${incompleteList.length}):
${incompleteList.map(task => `❌ ${task}`).join('\n')}

Total Tasks: ${allTasks.length}
Completion Rate: ${Math.round((completedList.length / allTasks.length) * 100)}%
    `.trim();

    const mailtoLink = `mailto:chilks605recognition@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const resetApp = () => {
    setSelectedRole('');
    setSelectedDay('');
    setSelectedShift('');
    setTeamMemberName('');
    setCompletedTasks({});
    setIncompleteReasons({});
  };

  const { daily, weekly } = getCurrentTasks();
  const allTasks = [...daily, ...weekly];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-purple-900">{t.title}</h1>
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Globe size={20} />
              {language === 'en' ? 'Español' : 'English'}
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className={`flex items-center gap-2 ${selectedRole ? 'text-green-600' : ''}`}>
              <User size={16} />
              <span>{selectedRole ? t.roles[selectedRole] : t.selectRole}</span>
            </div>
            <div className={`flex items-center gap-2 ${selectedDay ? 'text-green-600' : ''}`}>
              <Calendar size={16} />
              <span>{selectedDay ? t.days[selectedDay] : t.selectDay}</span>
            </div>
            <div className={`flex items-center gap-2 ${selectedShift ? 'text-green-600' : ''}`}>
              <Clock size={16} />
              <span>{selectedShift ? selectedShift.toUpperCase() : t.selectShift}</span>
            </div>
          </div>
        </div>

        {/* Role Selection */}
        {!selectedRole && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">{t.selectRole}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(t.roles).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left"
                >
                  <div className="font-semibold text-purple-900">{value}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Day Selection */}
        {selectedRole && !selectedDay && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-purple-900">{t.selectDay}</h2>
              <button onClick={resetApp} className="text-purple-600 hover:text-purple-800">
                {t.back}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(t.days).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedDay(key)}
                  className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-center"
                >
                  <div className="font-semibold text-purple-900">{value}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Shift Selection */}
        {selectedRole && selectedDay && !selectedShift && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-purple-900">{t.selectShift}</h2>
              <button onClick={() => setSelectedDay('')} className="text-purple-600 hover:text-purple-800">
                {t.back}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['am', 'pm', 'double'].map((shift) => (
                <button
                  key={shift}
                  onClick={() => setSelectedShift(shift)}
                  className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-center"
                >
                  <div className="font-semibold text-purple-900">{t[shift]}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Name Input */}
        {selectedRole && selectedDay && selectedShift && !teamMemberName && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-purple-900">{t.enterName}</h2>
              <button onClick={() => setSelectedShift('')} className="text-purple-600 hover:text-purple-800">
                {t.back}
              </button>
            </div>
            <div className="max-w-md">
              <input
                type="text"
                placeholder={t.yourName}
                value={teamMemberName}
                onChange={(e) => setTeamMemberName(e.target.value)}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && teamMemberName.trim() && setTeamMemberName(teamMemberName.trim())}
              />
              <button
                onClick={() => teamMemberName.trim() && setTeamMemberName(teamMemberName.trim())}
                disabled={!teamMemberName.trim()}
                className="mt-3 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Task Checklist */}
        {selectedRole && selectedDay && selectedShift && teamMemberName && allTasks.length > 0 && (
          <div className="space-y-6">
            {/* Daily Tasks */}
            {daily.length > 0 && (
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">{t.dailySidework}</h3>
                <div className="space-y-3">
                  {daily.map((task, index) => {
                    const taskId = `task-${index}`;
                    const isCompleted = completedTasks[taskId];
                    return (
                      <div key={taskId} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleTask(taskId)}
                            className={`flex-shrink-0 p-1 rounded-full ${
                              isCompleted ? 'text-green-600' : 'text-red-500'
                            }`}
                          >
                            {isCompleted ? <CheckCircle size={24} /> : <XCircle size={24} />}
                          </button>
                          <div className="flex-grow">
                            <div className={`font-medium ${isCompleted ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                              {task}
                            </div>
                            {!isCompleted && (
                              <input
                                type="text"
                                placeholder={t.reason}
                                value={incompleteReasons[taskId] || ''}
                                onChange={(e) => updateReason(taskId, e.target.value)}
                                className="mt-2 w-full p-2 border border-gray-300 rounded text-sm"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Weekly Tasks */}
            {weekly.length > 0 && (
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">{t.weeklySpark}</h3>
                <div className="space-y-3">
                  {weekly.map((task, index) => {
                    const taskId = `task-${daily.length + index}`;
                    const isCompleted = completedTasks[taskId];
                    return (
                      <div key={taskId} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleTask(taskId)}
                            className={`flex-shrink-0 p-1 rounded-full ${
                              isCompleted ? 'text-green-600' : 'text-red-500'
                            }`}
                          >
                            {isCompleted ? <CheckCircle size={24} /> : <XCircle size={24} />}
                          </button>
                          <div className="flex-grow">
                            <div className={`font-medium ${isCompleted ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                              {task}
                            </div>
                            {!isCompleted && (
                              <input
                                type="text"
                                placeholder={t.reason}
                                value={incompleteReasons[taskId] || ''}
                                onChange={(e) => updateReason(taskId, e.target.value)}
                                className="mt-2 w-full p-2 border border-gray-300 rounded text-sm"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setTeamMemberName('')}
                  className="px-6 py-3 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  {t.back}
                </button>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    {Object.values(completedTasks).filter(Boolean).length} / {allTasks.length} {t.completed}
                  </div>
                  <button
                    onClick={generateEmail}
                    className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Mail size={20} />
                    {t.submit}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideworkApp;