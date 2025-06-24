// Event Participation JavaScript functionality

// Function to show participant modal
function showParticipantModal(name, email, avatar, number, date, time) {
    // Update modal content with participant data
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalAvatar').src = avatar;
    document.getElementById('modalNumber').textContent = number;
    document.getElementById('modalId').textContent = '12345-9t'; // Generate or use actual ID
    document.getElementById('modalEventName').textContent = 'Engineering Day';
    document.getElementById('modalRegisterDate').textContent = date;
    document.getElementById('modalRegisterTime').textContent = time;
    
    // Show the modal
    document.getElementById('participantModal').style.display = 'flex';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    document.getElementById('participantModal').style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
document.getElementById('participantModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add onclick handlers to all view buttons
document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.btn-view');
    
    // Participant data array
    const participants = [
        {name: 'Thi Lihor', email: 'thilihor@gmail.com', avatar: 'IMG/image.png', number: '1', date: '08/25/2024', time: '13:32'},
        {name: 'Sheng gectav', email: 'shenggectav@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '2', date: '08/25/2024', time: '13:33'},
        {name: 'Puth darasokchea', email: 'puthdarsaokchea@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '3', date: '08/25/2024', time: '13:34'},
        {name: 'Phan chanvoleak', email: 'phanchanvoleak@gmail.com', avatar: 'IMG/image.png', number: '4', date: '08/25/2024', time: '13:35'},
        {name: 'Thi Lihor', email: 'thilihor@gmail.com', avatar: 'IMG/image.png', number: '5', date: '08/25/2024', time: '13:36'},
        {name: 'Sheng gectav', email: 'shenggectav@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '6', date: '08/25/2024', time: '13:37'},
        {name: 'Puth darasokchea', email: 'puthdarsaokchea@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '7', date: '08/25/2024', time: '13:38'},
        {name: 'Phan chanvoleak', email: 'phanchanvoleak@gmail.com', avatar: 'IMG/image.png', number: '8', date: '08/25/2024', time: '13:39'},
        {name: 'Thi Lihor', email: 'thilihor@gmail.com', avatar: 'IMG/image.png', number: '9', date: '08/25/2024', time: '13:40'},
        {name: 'Sheng gectav', email: 'shenggectav@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '10', date: '08/25/2024', time: '13:41'},
        {name: 'Puth darasokchea', email: 'puthdarsaokchea@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '11', date: '08/25/2024', time: '13:42'},
        {name: 'Phan chanvoleak', email: 'phanchanvoleak@gmail.com', avatar: 'IMG/image.png', number: '12', date: '08/25/2024', time: '13:43'},
        {name: 'Thi Lihor', email: 'thilihor@gmail.com', avatar: 'IMG/image.png', number: '13', date: '08/25/2024', time: '13:43'},
        {name: 'Sheng gectav', email: 'shenggectav@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '14', date: '08/25/2024', time: '13:45'},
        {name: 'Puth darasokchea', email: 'puthdarsaokchea@gmail.com', avatar: 'IMG/photo_2024-05-20_14-02-59.jpg', number: '15', date: '08/25/2024', time: '13:46'}
    ];
    
    // Add event listeners to view buttons (for buttons without onclick already set)
    viewButtons.forEach((button, index) => {
        if (!button.hasAttribute('onclick')) {
            const participant = participants[index];
            if (participant) {
                button.addEventListener('click', function() {
                    showParticipantModal(
                        participant.name,
                        participant.email,
                        participant.avatar,
                        participant.number,
                        participant.date,
                        participant.time
                    );
                });
            }
        }
    });
});

// Remove Modal functionality
function showRemoveModal(name) {
    document.getElementById('removeText').textContent = `Do you want to remove ${name} from registration?`;
    document.getElementById('removeModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeRemoveModal() {
    document.getElementById('removeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function confirmRemove() {
    // You can add logic here to actually remove the participant from the table
    closeRemoveModal();
    // Optionally show a success message or update the table
}

// Close modal when clicking outside of it
const removeModal = document.getElementById('removeModal');
if (removeModal) {
    removeModal.addEventListener('click', function(e) {
        if (e.target === this) closeRemoveModal();
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRemoveModal();
    }
});

// Add onclick handlers to all delete buttons
document.addEventListener('DOMContentLoaded', function() {
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const userNames = Array.from(document.querySelectorAll('.user-name')).map(e => e.textContent);
    deleteButtons.forEach((btn, idx) => {
        btn.onclick = function() {
            showRemoveModal(userNames[idx] || 'this user');
        };
    });
});
