from flask import Blueprint, request, jsonify
from . import db, bcrypt
from .models import User, Job, Bid
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

main = Blueprint('main', __name__)

@main.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@main.route('/jobs', methods=['GET'])
@jwt_required()
def get_jobs():
    jobs = Job.query.all()
    output = []
    for job in jobs:
        job_data = {'title': job.title, 'description': job.description, 'client_id': job.client_id}
        output.append(job_data)
    return jsonify({'jobs': output}), 200

@main.route('/jobs/<int:job_id>', methods=['GET'])
@jwt_required()
def get_job(job_id):
    job = Job.query.get_or_404(job_id)
    job_data = {'title': job.title, 'description': job.description, 'client_id': job.client_id}
    return jsonify(job_data), 200

@main.route('/jobs', methods=['POST'])
@jwt_required()
def create_job():
    data = request.get_json()
    new_job = Job(title=data['title'], description=data['description'], client_id=get_jwt_identity())
    db.session.add(new_job)
    db.session.commit()
    return jsonify({'message': 'Job created successfully'}), 201

@main.route('/jobs/<int:job_id>', methods=['PUT'])
@jwt_required()
def update_job(job_id):
    data = request.get_json()
    job = Job.query.get_or_404(job_id)
    job.title = data['title']
    job.description = data['description']
    db.session.commit()
    return jsonify({'message': 'Job updated successfully'}), 200

@main.route('/jobs/<int:job_id>', methods=['DELETE'])
@jwt_required()
def delete_job(job_id):
    job = Job.query.get_or_404(job_id)
    db.session.delete(job)
    db.session.commit()
    return jsonify({'message': 'Job deleted successfully'}), 200

@main.route('/users/reset-password', methods=['PUT'])
def reset_password():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user:
        hashed_password = bcrypt.generate_password_hash(data['new_password']).decode('utf-8')
        user.password = hashed_password
        db.session.commit()
        return jsonify({'message': 'Password updated successfully'}), 200
    return jsonify({'message': 'User not found'}), 404
