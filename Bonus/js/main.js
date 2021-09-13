Vue.config.devtools = true;
const app = new Vue({
    el: '#root',
    data: {
        userData: [{
            name: 'Stefano',
            avatar: '_io',
            visible: true,
            message: [{
                date: '',
                message: '',
                status: ''
            }]
        }],
        deleteMessagesIndex: '-1',
        conversationIndex: '0',
        userMessages: '',
        search: '',
        lastMessage: {},
        opacityFlag: false,
        opacity: 'opacity0',
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
    },
    methods: {
        changeConversation(index) {

            this.conversationIndex = index;

        },
        toggleDropDown(index) {
            if (this.deleteMessagesIndex == index) {
                return this.deleteMessagesIndex = -1;
            }
            return this.deleteMessagesIndex = index;
        },
        timeFunction: function() {
            var currentDate = new Date();
            var currentDateWithFormat = new Date().toJSON().slice(0, 19).replace(/-/g, '/').replace(/T/, ' ');
            return currentDateWithFormat
        },
        sendMessage(index) {
            const message = this.userMessages;
            const status = 'sent';
            const date = this.timeFunction();
            this.contacts[index].messages.push({ date, message, status });
            this.lastMessage = { date, message, status, index }
            this.userMessages = '';
            this.timerMessage(index);

        },
        // receiveMessage(index) {
        //     const message = 'Ok!';
        //     const status = 'received';
        //     const date = this.timeFunction();
        //     this.contacts[index].messages.push({ date, message, status });
        // },
        timerMessage(index) {
            const self = this;
            setTimeout(() => {
                const message = 'Ok!';
                const status = 'received';
                const date = self.timeFunction();
                self.contacts[index].messages.push({ date, message, status });
                this.lastMessage = { date, message, status, index }
            }, 1000);
        },
        // search filter with partial results
        searchFilter() {
            if (this.search != '') {
                return this.contacts.filter(x => x.name.toLowerCase().includes(this.search.toLowerCase()));
            }
            return this.contacts;
        },
        removeMessageFunction(conversationIndex, messagesIndex) {
            this.contacts[conversationIndex].messages.splice(messagesIndex, 1)
            this.deleteMessagesIndex = '-1';
        }
    }
})