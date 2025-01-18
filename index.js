//Problem 1: Online Appointment Scheduler
const appointments = [];

// Add Appointment
function addAppointment(clientName, appointmentTime, serviceType) {
    try {
        if (!clientName) throw new Error("Client name cannot be empty.");
        if (!(appointmentTime instanceof Date) || isNaN(appointmentTime)) {
            throw new Error("Invalid date.");
        }
        appointments.push({ clientName, appointmentTime, serviceType });
    } catch (error) {
        console.error(error.message);
    }
}

// Upcoming Appointments
function upcomingAppointments() {
    const now = new Date();
    return appointments.filter(appointment => {
        const diffInMinutes = (appointment.appointmentTime - now) / 60000;
        return diffInMinutes > 0 && diffInMinutes <= 60;
    });
}

// Send Reminder
function sendReminder() {
    appointments.forEach(({ clientName, appointmentTime, serviceType }) => {
        const timeUntil = appointmentTime - new Date();
        if (timeUntil > 0) {
            setTimeout(() => {
                console.log(`Reminder: Your appointment for ${serviceType} with ${clientName} is scheduled at ${appointmentTime}.`);
            }, timeUntil);
        }
    });
}

module.exports = { addAppointment, upcomingAppointments, sendReminder };

//Problem 2: Expense Tracker
const expenses = [];

// Add Expense
function addExpense(description, amount, date) {
    try {
        if (!description) throw new Error("Description cannot be empty.");
        if (typeof amount !== "number" || amount <= 0) throw new Error("Amount must be a positive number.");
        if (!(date instanceof Date) || isNaN(date)) throw new Error("Invalid date.");
        expenses.push({ description, amount, date });
    } catch (error) {
        console.error(error.message);
    }
}

// Total Expenses
function totalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Filter by Date Range
function filterByDateRange(startDate, endDate) {
    return expenses.filter(expense => expense.date >= startDate && expense.date <= endDate);
}

// Async Fetch Expense Report
async function fetchExpenseReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (expenses.length > 0) {
                resolve(expenses);
            } else {
                reject("No expenses to report.");
            }
        }, 2000);
    });
}

module.exports = { addExpense, totalExpenses, filterByDateRange, fetchExpenseReport };

//Problem 3: Study Planner
const studySessions = [];

// Add Session
function addSession(topic, sessionTime, duration) {
    try {
        if (!topic) throw new Error("Topic cannot be empty.");
        if (!(sessionTime instanceof Date) || isNaN(sessionTime)) throw new Error("Invalid session time.");
        if (typeof duration !== "number" || duration <= 0) throw new Error("Duration must be a positive number.");
        studySessions.push({ topic, sessionTime, duration });
    } catch (error) {
        console.error(error.message);
    }
}

// List Today's Sessions
function listTodaysSessions() {
    const today = new Date();
    return studySessions.filter(session => {
        const sessionDate = session.sessionTime;
        return sessionDate.toDateString() === today.toDateString();
    });
}

// Session Countdown
function sessionCountdown() {
    studySessions.forEach(({ topic, sessionTime }) => {
        const timeUntil = sessionTime - new Date();
        if (timeUntil > 0) {
            setTimeout(() => {
                console.log(`Session on ${topic} starts now!`);
            }, timeUntil);
        }
    });
}

// Async Fetch Study Materials
async function fetchStudyMaterials(topic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (topic) {
                resolve(`Study materials for ${topic} have been successfully fetched.`);
            } else {
                reject("Invalid topic.");
            }
        }, 2000);
    });
}

module.exports = { addSession, listTodaysSessions, sessionCountdown, fetchStudyMaterials };
