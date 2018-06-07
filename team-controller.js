'use strict';

const TeamModel = require('../models/team-model'),
	tm = new TeamModel();

class TeamController {
	getAll(req, res, next) {
		tm.getAll((docs) => {
			res.render('index', {
				title:'База данных',
				data: docs
			});
		});
	}

	getOne(req, res, next) {
		let _id = req.params._id;
		console.log(_id);

		tm.getOne(_id, (docs) => {
			console.log(docs);
			
			res.render('edit', {
				title : 'Изменить анкету',
				data : docs
			});
		});
	}

	save(req, res, next) {
		let contacto = {
			_id: (req.body._id || null),
			name: req.body.name,
			surname: req.body.surname,
			otch: req.body.otch,
			birthday: req.body.birthday,
			tel: req.body.tel,
			e_mail: req.body.e_mail
			// Не забфваем перечислять через запятую
		};
		
		console.log(contacto);

		tm.save( contacto, () => res.redirect('/') );
	}

	delete(req, res, next) {
		let _id = req.params._id;
		console.log(_id);

		tm.delete( _id, () => res.redirect('/') );
	}

	addForm(req, res, next) {
		res.render('add', {title: 'Анкета'});
	}

	error404(req, res, next) {
		let err = new Error();
		err.status = 404;
		err.statusText = 'NOT FOUND';

		res.render('error', {error: err});
	}
}

module.exports = TeamController;