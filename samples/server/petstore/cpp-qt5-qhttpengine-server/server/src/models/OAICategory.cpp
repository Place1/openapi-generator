/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


#include "OAICategory.h"

#include "OAIHelpers.h"

#include <QJsonDocument>
#include <QJsonArray>
#include <QObject>
#include <QDebug>

namespace OpenAPI {

OAICategory::OAICategory(QString json) {
    this->fromJson(json);
}

OAICategory::OAICategory() {
    this->init();
}

OAICategory::~OAICategory() {

}

void
OAICategory::init() {
    m_id_isSet = false;
    m_name_isSet = false;
}

void
OAICategory::fromJson(QString jsonString) {
    QByteArray array (jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void
OAICategory::fromJsonObject(QJsonObject json) {
    ::OpenAPI::fromJsonValue(id, json[QString("id")]);
    
    ::OpenAPI::fromJsonValue(name, json[QString("name")]);
    
}

QString
OAICategory::asJson () const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject
OAICategory::asJsonObject() const {
    QJsonObject obj;
	if(m_id_isSet){
        obj.insert(QString("id"), ::OpenAPI::toJsonValue(id));
    }
	if(m_name_isSet){
        obj.insert(QString("name"), ::OpenAPI::toJsonValue(name));
    }
    return obj;
}

qint64
OAICategory::getId() const {
    return id;
}
void
OAICategory::setId(const qint64 &id) {
    this->id = id;
    this->m_id_isSet = true;
}

QString
OAICategory::getName() const {
    return name;
}
void
OAICategory::setName(const QString &name) {
    this->name = name;
    this->m_name_isSet = true;
}


bool
OAICategory::isSet() const {
    bool isObjectUpdated = false;
    do{ 
        if(m_id_isSet){ isObjectUpdated = true; break;}
    
        if(m_name_isSet){ isObjectUpdated = true; break;}
    }while(false);
    return isObjectUpdated;
}

}

