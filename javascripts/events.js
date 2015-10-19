(function(w){

        var events = [
            {
                titulo : "DevFest Sudeste 2015 em BH",
                dataInicio : "2015-10-24",
                dataFim : "2015-10-24",
                local : "CDL/BH",
                endereco : "Av. João Pinheiro, 495 – Bairro Funcionários - Belo Horizonte/MG",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8771525851294!2d-43.93933098508547!3d-19.929580986603934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e7634e71b5%3A0xf4044fc8a31c7a0a!2sAv.+Jo%C3%A3o+Pinheiro%2C+495+-+Centro%2C+Belo+Horizonte+-+MG%2C+30130-180!5e0!3m2!1spt-BR!2sbr!4v1444358712608",
                localizacao : {
                    latitude: -19.929580986603934,
                    longitude: -43.93933098508547
                },
                link : "http://sudeste.devfest.com.br/"
            },
            {
                titulo : "PHPRio Talks",
                dataInicio : "2015-10-24",
                dataFim : "2015-10-24",
                local : "EDX Treinamento e Consultoria",
                endereco : "Av. Rio Branco, 124 - Sala 1102 , Centro, RJ",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2298368874094!2d-43.18017438503432!3d-22.904891985012853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e36fccba5%3A0x86232dbfd6d616b0!2sEDX+Treinamento+e+Consultoria+em+Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1444358950531",
                localizacao : {
                    latitude: -22.904891985012853,
                    longitude: -43.18017438503432
                },
                link : "https://doity.com.br/phprio-talks-outubro2015"
            },
            {
                titulo : "WordCamp Porto Alegre",
                dataInicio : "2015-10-31",
                dataFim : "2015-10-31",
                local : "Nós Coworking",
                endereco : "Av. Cristóvão Colombo, 545 - Bairro Floresta - Porto Alegre",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.39545183908!2d-51.214532784885314!3d-30.02551078188926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a56050c6df%3A0x8635af1590a7caf1!2sAv.+Crist%C3%B3v%C3%A3o+Colombo%2C+545+-+Floresta%2C+Porto+Alegre+-+RS%2C+90560-003!5e0!3m2!1spt-BR!2sbr!4v1444359140428",
                localizacao : {
                    latitude: -30.02551078188926,
                    longitude: -51.214532784885314
                },
                link : "https://portoalegre.wordcamp.org/2015/"
            },
            {
                titulo : "API Experience",
                dataInicio : "2015-11-11",
                dataFim : "2015-11-11",
                local : "Cubo Coworking",
                endereco : "Rua Casa do Ator, 919 - Vila Olimpia, São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14624.45990369449!2d-46.69028104782032!3d-23.600209141125518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574e7a6e2f1d%3A0x25a8764c172d9497!2sR.+Casa+do+Ator%2C+919+-+Vila+Ol%C3%ADmpia%2C+S%C3%A3o+Paulo+-+SP%2C+04546-003%2C+Brasil!5e0!3m2!1spt-BR!2sbr!4v1445109251302",
                localizacao : {
                    latitude: -23.597663,
                    longitude: -46.682062
                },
                link : "http://www.apiexperience.com.br/"
            },
            {
                titulo : "FrontInPoa 2015",
                dataInicio : "2015-11-14",
                dataFim : "2015-11-14",
                local : "UniRitter",
                endereco : "Rua Orfanotrófio, 515 - Alto Teresópolis",
                embed_link : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13810.034301842712!2d-51.2193774!3d-30.0796178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de74d911b011b86!2sUniRitter!5e0!3m2!1spt-BR!2sbr!4v1445014065257",
                localizacao : {
                    latitude: -30.0796178,
                    longitude: -51.2193774
                },
                link : "http://www.frontinpoa.com.br/"
            },
            {
                titulo : "Frontinsampa 2015",
                dataInicio : "2015-11-21",
                dataFim : "2015-11-21",
                local : "Inferno Club",
                endereco : "Rua Augusta, 501 - Jardim Paulista, São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4713389613744!2d-46.650642999999995!3d-23.5515095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584a87db01ed%3A0x8984cc59b6df5141!2sR.+Augusta%2C+501+-+Consola%C3%A7%C3%A3o%2C+S%C3%A3o+Paulo+-+SP%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1440439501467",
                localizacao : {
                    latitude: -23.551219,
                    longitude: -46.650659
                },
                link : "http://www.frontinsampa.com.br/"
            },
            {
                titulo : "PhpConference Brasil 2015",
                dataInicio : "2015-12-02",
                dataFim : "2015-12-06",
                local : "UNIFIEO",
                endereco : "Av. Franz Voegeli, 300 - Osasco, São Paulo",
                embed_link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7789372193115!2d-46.76145219999998!3d-23.540452100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff447f41f72b%3A0xdfa4e0bd5729826e!2sUNIFIEO!5e0!3m2!1spt-BR!2sbr!4v1444267826591",
                localizacao : {
                    latitude: -23.540452,
                    longitude: -46.761452
                },
                link : "http://www.phpconference.com.br/"
            },
            {
                titulo : "XII Fórum Goiano de Software Livre",
                dataInicio : "2015-12-04",
                dataFim : "2015-12-05",
                local : "SENAC",
                endereco : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30576.090874764446!2d-49.22550599999998!3d-16.67631499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xc106e8f2ca4ae796!2sFaculdade+de+Tecnologia+Senac+Goi%C3%A1s!5e0!3m2!1sen!2sca!4v1445217805657",
                localizacao : {
                    latitude: -16.669819,
                    longitude: -49.236063
                },
                link : "http://fgsl.net/"
            }
        ];

        var monthNames = [
          "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];

        w.Events = {
                getAll : function(){
                    for(i=0;i<events.length;i++) {
                        events[i].data = Events.getTextData(events[i].dataInicio, events[i].dataFim);
                    }
                    return events;
                },

                getByTitulo : function (titulo) {
                    /*jshint esnext: true */
                    for (var evento of events) {
                        if (evento.titulo !== titulo) continue;
                        evento.data = Events.getTextData(evento.dataInicio, evento.dataFim);
                        return evento;
                    }
                },

                getTextData : function(dataInicio, dataFim){
                    dataInicio = new Date(dataInicio);
                    day1 = dataInicio.getUTCDate();
                    month1 = dataInicio.getUTCMonth();
                    year1 = dataInicio.getUTCFullYear();

                    dataFim = new Date(dataFim);
                    day2 = dataFim.getUTCDate();
                    month2 = dataFim.getUTCMonth();
                    year2 = dataFim.getUTCFullYear();

                    if (year1 != year2) {
                        return day1 + ' de ' + monthNames[month1] + ' de ' + year1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    if (month1 != month2) {
                        return day1 + ' de ' + monthNames[month1] + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    if (day1 != day2) {
                        return day1 + ' a ' + day2 + ' de ' + monthNames[month2] + ' de ' + year2;
                    }

                    return day1 + ' de ' + monthNames[month2] + ' de ' + year2;
                }
        };
})(window);
